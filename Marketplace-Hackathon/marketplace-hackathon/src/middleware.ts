import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const myMiddleware = async (req) => {
  try {
    return clerkMiddleware(req)
  } catch (error) {
    console.error('Clerk Middleware Error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}

export default myMiddleware
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}