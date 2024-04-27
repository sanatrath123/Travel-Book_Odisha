import { Client, Databases, ID } from "appwrite";
import conf from "../conf";
class Servies {

    Client = new Client()
    database
constructor(){
this.Client.setEndpoint(conf.appwriteurl)
            .setProject(conf.projectId)
      this.database  =  new Databases(this.Client)
}

//add the user to databse 
async AddUserToDB(data){
    const {name , email , $id} = data
 const id = $id
try {
    return  await this.database.createDocument(
        conf.databaseId,
        conf.usercollectionId,
        ID.unique(),
        {name , email ,id}
    )
} catch (error) {
   console.log("ERROR IN ADDUSERDB", error) 
}
}

//add the cart in DB
async ADDTOCART (data){
    const {img , title , price , description} = data
    try {
        

    } catch (error) {
        console.log("ERROR IN ADD DATA ", error)
    }
}


}

const servise = new Servies
export default servise