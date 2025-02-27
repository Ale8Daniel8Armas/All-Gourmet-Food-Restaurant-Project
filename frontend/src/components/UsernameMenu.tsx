import { CircleUserRound } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    //Usuario registrado por el auth
    const {user, logout} = useAuth0();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className = "flex items-center px-3 font-bold hover:text-orange-500">
            <CircleUserRound className = "text-orange-500">
            {user?.email}
            </CircleUserRound>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
            <Link 
            to = "/user-profile" 
            className = "font-bold hover: text-orange-400">
            Perfil de Usuario
            </Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem>
                <Button onClick = {() => logout()} className = "flex flex-1 font-bold bg-orange-500">
                    Salir
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu