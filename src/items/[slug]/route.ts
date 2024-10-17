// Dynamic Route Segments

// app/items/[slug]/route.ts

// export async function GET(
//     request: Request,
//     { params }: { params: { slug: string } }
//   ) {
//     const slug = params.slug // 'a', 'b', or 'c'
//   }

//   Route	Example                     URL	       params
//   app/items/[slug]/route.js	    /items/a	{ slug: 'a' }
//   app/items/[slug]/route.js	    /items/b	{ slug: 'b' }
//   app/items/[slug]/route.js	    /items/c	{ slug: 'c' }