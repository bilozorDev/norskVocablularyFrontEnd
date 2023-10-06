// ./deskStructure.js

import { CogIcon } from "@sanity/icons";

export const myStructure = (S) =>

  S.list()
  
    .title("Content")  // Sets the title for the list
    
    .items([
     
      S.listItem()
        .title("Settings") 
        .icon(CogIcon)
        .child(
          S.list()
            // Sets a title for our new list
            .title("Site Settings")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Main Navigation")
                .child(
                  S.document().schemaType("navigation").documentId("navigation")
                ),
                S.listItem()
                .title("Website Logo")
                .child(
                  S.document().schemaType("mainLogo").documentId("mainLogo")
                ),
              /*
              To add more singletons, just copy the above snippet and change the title and documentId

                S.listItem()
                .title('Main Navigation')
                .child(S.document().schemaType('navigation').documentId('navigation')),
                
              */
            ])
           
            
        ),S.divider(),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) => !["navigation", "siteSettings", "mainLogo"].includes(listItem.getId())
      ),
      
    ]);
