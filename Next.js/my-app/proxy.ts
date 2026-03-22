import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    
    //simulando autenticação
    const authenticated = false
    
    if(request.nextUrl.pathname.startsWith('/posts_front') && !authenticated){
        console.log("Usuário não autenticado, redirecionando para a home.")
        return NextResponse.redirect(new URL('/', request.url))
    }
  
    return NextResponse.next();
}