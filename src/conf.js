const conf = {
    appwriteurl : String(import.meta.env.VITE_APPWRITE_URL),
    projectId : String(import.meta.env.VITE_APPWRITE_PROJECTID),
    databaseId: String(import.meta.env.VITE_APPWRITE_DATABASEID),
    usercollectionId : String(import.meta.env.VITE_APPWRITE_USERS_COLLECTIONID),
    cartcollectionId : String(import.meta.env.VITE_APPWRITE_CART_COLLECTIONID),
    favlistcollectionId : String(import.meta.env.VITE_APPWRITE_FAVLIST_COLLECTIONID)
}

export default conf