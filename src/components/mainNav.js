 import React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import UniversalLink from "../utils/UniversalLink"
 import { FlatListToHierarchical } from "../utils/FlatListToHierarchical"
 
 import * as style from "./mainNav.module.css"
 import "./layout.css"

 const MenuLoop = ({ menuItems }) => {
   return (
     <ul>
       {menuItems.map((menuItem, index) => {
         return (
           <li
             key={index}
             className={menuItem.routes.length > 0 ? "has-submenu" : undefined}
           >
             <UniversalLink to={menuItem.path} activeClassName="current-page">
               {menuItem.title}
             </UniversalLink>
             {menuItem.routes.length > 0 && (
               <MenuLoop menuItems={menuItem.routes}></MenuLoop>
             )}
           </li>
         )
       })}
     </ul>
   )
 }
 
 const MainNav = () => {
   const wpMenu = useStaticQuery(graphql`
     {
       allWpMenuItem(
         sort: { fields: order, order: ASC }
         filter: {
           menu: { node: { slug: { eq: "top-menu" } } }
          #  parentDatabaseId: { eq: 0 }
         }
       ) {
         nodes {
           id
           title: label
           path
           target
           parent: parentId
         }
       }
     }
   `)
 
   console.log("Raw data:", wpMenu.allWpMenuItem.nodes)
   const headerMenu = FlatListToHierarchical(wpMenu.allWpMenuItem.nodes, {
     idKey: "id",
     childrenKey: "routes",
     parentKey: "parent",
   })
   console.log("headerMenu: ", headerMenu)
 
   return (
     <nav className={style.mainnav}>
       {headerMenu.length > 0 && <MenuLoop menuItems={headerMenu}></MenuLoop>}
     </nav>
   )
 }
 
 export default MainNav
 