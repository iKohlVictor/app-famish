export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            login: undefined;
            menu: undefined;
            finalizeOrder: {
                id:String;
                user:number;
            };
            newProduct: undefined;
            newUser: undefined;
            request: {
                id:String;
                name:String;
                description:String; 
            };
            users: undefined;
        }
    }
}