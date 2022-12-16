export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            login: undefined;
            menu: undefined;
            finalizeOrder: {
                id: String,
                name:String,
                url:string,
                quantity:number
            };
            newProduct: undefined;
            newUser: undefined;
            request: {
                id:String;
                name:String;
                description:String;
                url: string;
            };
            users: undefined;
        }
    }
}