import { auth, currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import { Liveblocks } from "@liveblocks/node";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCK_SECRET_KEY!,
});

export async function POST(req: Request) {
  console.log("💡 /api/liveblocks-auth hit");

  try {
    const { sessionClaims } = await auth();
    const claims = sessionClaims as {
      o?: {
        id: string;
        rol?: string;
        slg?: string;
      };
    };

    if (!sessionClaims) {
      return new Response("Unauthorized! No session claims.", { status: 401 });
    }

    const user = await currentUser();

    if (!user) {
      return new Response("Unauthorized! No current user.", { status: 401 });
    }

    const { room } = await req.json();

    if (!room) {
      return new Response("Unauthorized! No room ID in request.", {
        status: 401,
      });
    }

    const document = await convex.query(api.documents.getById, { id: room });

    if (!document) {
      return new Response("Unauthorized! Document not found.", { status: 401 });
    }

    const isOwner = document.ownerId === user.id;
    const isOrgMember =
      Boolean(document.organizationId) &&
      document.organizationId === claims?.o?.id;

    if (!isOwner && !isOrgMember) {
      return new Response("Unauthorized! No access to room.", { status: 401 });
    }

    const name =
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous";
    const nameToNumber = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = Math.abs(nameToNumber) % 360;
    const color = `hsl(${hue}, 80%, 60%)`;

    const session = liveblocks.prepareSession(user.id, {
      userInfo: {
        name:
          user.fullName ??
          user.primaryEmailAddress?.emailAddress ??
          "Anonymous",
        avatar: user.imageUrl,
        color,
      },
    });

    session.allow(room, session.FULL_ACCESS);

    const { body, status } = await session.authorize();

    return new Response(body, { status });
  } catch (err) {
    console.error("🔥 Error in /api/liveblocks-auth:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
