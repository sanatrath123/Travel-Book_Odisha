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

//collect the user data 
 async GetUser(data) {
const {$id} = data
    try {
        debugger
        const AllData = await this.database.listDocuments(
            conf.databaseId,
            conf.usercollectionId,
        )
        if(!AllData) return 
    
const UserData = AllData.documents
.filter((doc)=>(
 doc.id == $id 
))

return UserData
    } catch (error) {
        console.log("ERROR IN GetUSERDATA", error)
    }
}

//add the cart in DB
async ADDTOCART (data){
    const {img , title , price , description ,owner} = data
    debugger
    try {
        await this.database.createDocument(
            conf.databaseId,
            conf.cartcollectionId,
            ID.unique(),
            {img , title , price , description ,owner}
        )

    } catch (error) {
        console.log("ERROR IN ADD DATA ", error)
    }
}


}

const servise = new Servies
export default servise