"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";
 import { toast } from 'react-toastify';



const DeleteKindoraDialog = ({id , email} : {id : string, email : string}) => {

    const handleDeleteKindora = async() => {
       const res = await fetch (`http://localhost:8000/kindora/${id}`,{
        method : "DELETE" ,

        // optional: if you want to send the email in the request body
         headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    )

       const data = await res.json()

       if(data.deletedCount === 1){
        toast.success("Event deleted successfully")
    
       }


    //    console.log(data)

    redirect('/')

    }
    return (
        <div>
              <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" size="sm">
            <Trash2 data-icon="inline-start" />
            Cancel
          </Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteKindora}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        </div>
    );
};

export default DeleteKindoraDialog;