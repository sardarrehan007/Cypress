class Sale{
   dashboard_sale_icon="/html/body/div/div/div[3]/div[1]/div[1]/div/div/div[1]/div/div"
   Burger_menu='/html/body/div/div/div[1]/header/div/button'
   Sale_processing= '/html/body/div[2]/div/div/div[1]/ul/div[1]'
   Inner_saleprocessing="/html/body/div[5]/div/div/div[1]/ul/div[2]/div[2]"
   Product_search='/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div/div/div[1]/div/div/input'
   quantity="/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/div/div/input"
   Ok_button= '/html/body/div[3]/div[2]/div/div[3]/div[2]/div'
   Apply_button='/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[1]/div[2]/button[1]'
   editinglinebtn="/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[2]/div/div/div[6]/div[2]/table/tbody/tr[1]/td[4]/a[1]"
   supplied="/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[2]/div/div/div[6]/div[1]/div/div[1]/div/table/tbody/tr[1]/td[3]/div/div/div[1]/input"
   Process_button='/html/body/div[1]/div/div[3]/div[2]/div/div[3]/button[4]'
   Customer_purchase_order="/html/body/div[3]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/div/form/div/div/div/div[11]/div/div/div/input"
   Saleconfirmation="/html/body/div[3]/div[2]/div/div[3]/button[1]/span[1]/div"
   Cancel_sale="/html/body/div[1]/div/div[3]/div[3]/div/div[3]/button[3]"
   selecting_no="/html/body/div[3]/div[2]/div/div[2]/button[2]"
   search_customer ="/html/body/div[1]/div/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div/div[1]/div/div/input"
   Warehouse="/html/body/div[1]/div/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div/div[1]/div/div/input"
   Apply_Customer="/html/body/div[1]/div/div[3]/div[1]/div[1]/div[1]/div[3]/button[2]"
   cash_location="/html/body/div[3]/div[2]/div/div[2]/div/div[1]/div[2]/div/div[1]/div/div/input"
   payment_method="/html/body/div[3]/div[2]/div/div[2]/div/div[1]/div[3]/div[1]/div/div[1]/div/div/input"
   payment_apply="/html/body/div[3]/div[2]/div/div[2]/div/div[1]/div[3]/button"
   cash_me_up="/html/body/div[4]/div[2]/div/div[2]/button"
   price_change="/html/body/div[3]/div[2]/div/div[2]/div/div[1]/div[3]/div[2]/div[1]/div/div/input"
   payment_entry_ok="/html/body/div[3]/div[2]/div/div[3]/button[1]"
   sell_as_kit="/html/body/div[3]/div[2]/div/div[2]/button[3]"
   product_price="/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[1]/div[1]/div[3]/div[1]/div[1]/div/div/div/input"
   price_override_reason="/html/body/div[3]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div[1]/div/form/div/div/div/div[1]/div/div[1]/div/div/input"
   price_override_ok="/html/body/div[3]/div[2]/div/div[3]/button[1]"
   product_details="/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[2]/div/div/div[6]/div[2]/table/tbody/tr[4]/td[1]"
   kit_components="/html/body/div[1]/div/div[3]/div[2]/div/div[2]/button[3]"
   component_details="/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[1]/div[2]/div/div/div[6]/div[2]/table/tbody/tr[1]/td[1]"
   component_details_ok="/html/body/div[1]/div/div[3]/div[2]/div/div[3]/button[2]"
   unsaved_button="/html/body/div[4]/div[2]/div/div[2]/button"
   productsearchbutton="/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div/div/div[1]/div/div/div/button"

clickdashboardsaleicon(){
    cy.xpath(this.dashboard_sale_icon).should("be.visible").click() 
}

clickburgermenu(){
    cy.xpath(this.Burger_menu).should("be.visible").click()   

}

Saleprocessing(){
    cy.xpath(this.Sale_processing).should("contain", "Sales Processing").click()
   

}

Innersaleprocessing(){
    cy.xpath(this.Inner_saleprocessing).click()

}
Cancelsale(){
    cy.xpath(this.Cancel_sale).should("be.visible").click()

}
selectingNo(){
    cy.xpath(this.selecting_no).should("be.visible").click()

}

searchcustomer(){
    cy.xpath(this.search_customer).should("be.visible").type(Cypress.env('CUSTOMER')) 
}


enterWarehouse(){
    cy.xpath(this.Warehouse).should("be.visible").type(Cypress.env('WAREHOUSE')) 

}
clickcustomer_apply(){
    cy.xpath(this.Apply_Customer).should("be.visible").click()
}

Productsearch(){
    cy.xpath(this.Product_search).should("be.visible").type(Cypress.env('PRODUCT'))   

}
clickproductsearchbutton(){
    cy.xpath(this.productsearchbutton).should("be.visible").click()

}

Okbutton(){
    cy.xpath(this.Ok_button).should("be.visible").click()
}
enterquantity(){
    cy.xpath(this.quantity).should("be.visible").type('11{enter}')
}


Apply(){
    cy.xpath(this.Apply_button).click()
}

editline(){
    cy.xpath(this.editinglinebtn).should("be.visible").click()
}

suppliedquantity(){
    cy.xpath(this.supplied).should("be.visible").click()
    cy.xpath(this.supplied).should("be.visible").type(11)
}

    
Process(){
    cy.xpath(this.Process_button).click()
}


Customerpurchaseorder(purchaseorder){
    cy.xpath(this.Customer_purchase_order).should("be.visible").type(purchaseorder)
}

Saleconfirm(){
    cy.xpath(this.Saleconfirmation).should("be.visible").click()
}

cashlocation(){
    cy.xpath(this.cash_location).should("be.visible").clear()
    cy.xpath(this.cash_location).should("be.visible").type(Cypress.env('CASHLOCATION'))
}

paymentmethod(){
    cy.xpath(this.payment_method).should("be.visible").clear()
    cy.xpath(this.payment_method).should("be.visible").type("cash{enter}")
}

paymentapply(){
    cy.xpath(this.payment_apply).should("be.visible").click()

}
cashmeup(){
    cy.xpath(this.cash_me_up).should("be.visible").click()
}
pricechange(){
    cy.xpath(this.price_change).should("be.visible").clear()
    cy.xpath(this.price_change).type('109{enter}')
}

paymentok(){
    cy.xpath(this.payment_entry_ok).should("be.visible").click()
}
KittingProductsearch(){
    cy.xpath(this.Product_search).should("be.visible").type(Cypress.env('KITTING_PRODUCT'))
}
sellaskit(){
    cy.xpath(this.sell_as_kit).should("be.visible").click()  

}
productprice(){
    cy.xpath(this.product_price).should("be.visible").type('4{enter}')
}
priceoverridereason(){
    cy.xpath(this.price_override_reason).should("be.visible").type('def{enter}')
}
priceoverrideok(){
    cy.xpath(this.price_override_ok).should("be.visible").click()
}
clickproductdetails(){
    cy.xpath(this.product_details).should("be.visible").click()

}
clickkitcomponents(){
    cy.xpath(this.kit_components).should("be.visible").click()

}
clickcomponentdetails(){
    cy.xpath(this.component_details).should("be.visible").click()

}
clickcomponentdetailsok(){
    cy.xpath(this.component_details_ok).should("be.visible").click()

}
clickunsaved(){
    cy.xpath(this.unsaved_button).click()

}
}
export default Sale