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
import { apiUrl } from "@/lib/api";
 import { toast } from 'react-toastify';
import { getTokenFromClient } from "@/lib/getTokenFromClient";



const DeleteKindoraDialog = ({id , email} : {id : string, email : string}) => {

    const handleDeleteKindora = async() => {

      const token = await getTokenFromClient()
      try {
        const res = await fetch (apiUrl(`/kindora/${id}`),{
          method : "DELETE" ,

          // optional: if you want to send the email in the request body
           headers: {
            "Content-Type": "application/json",
            authorization : `bearer ${token}`
          },
          body: JSON.stringify({ email }),
        }
      )

        const data = await res.json()

        if(!res.ok || data.deletedCount !== 1){
          throw new Error(data.message || "Event deletion failed")
        }

        toast.success("Event deleted successfully")
      } catch (error) {
        console.error(error)
        toast.error("Failed to delete event. Please try again.")
        return
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