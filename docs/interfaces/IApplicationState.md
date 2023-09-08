# Interface: IApplicationState

## Table of contents

### Properties

- [addresses](IApplicationState.md#addresses)
- [created\_via](IApplicationState.md#created_via)
- [currency](IApplicationState.md#currency)
- [display_currency](IApplicationState.md#display_currency)
- [display_exchange_rate](IApplicationState.md#display_exchange_rate)
- [customer](IApplicationState.md#customer)
- [discounts](IApplicationState.md#discounts)
- [fees](IApplicationState.md#fees)
- [is\_processed](IApplicationState.md#is_processed)
- [line\_items](IApplicationState.md#line_items)
- [order\_meta\_data](IApplicationState.md#order_meta_data)
- [order\_total](IApplicationState.md#order_total)
- [payments](IApplicationState.md#payments)
- [resumable\_link](IApplicationState.md#resumable_link)
- [shipping](IApplicationState.md#shipping)
- [taxes](IApplicationState.md#taxes)

## Properties

### addresses

• **addresses**: [`IAddressType`](IAddressType.md)

___

### created\_via

• **created\_via**: `string`

___

### currency

• **currency**: [`ICurrency`](ICurrency.md)

___

### display_currency

• **display_currency**: [`ICurrency`](ICurrency.md) | ``undefined``

___

### display_exchange_rate

• **display_exchange_rate**: ``number`` | ``undefined``

___

### customer

• **customer**: [`ICustomer`](ICustomer.md)

___

### discounts

• **discounts**: [`IDiscount`](IDiscount.md)[]

___

### fees

• **fees**: `undefined` | [`IFees`](IFees.md)[]

___

### is\_processed

• **is\_processed**: `boolean`

___

### line\_items

• **line\_items**: [`ILineItem`](ILineItem.md)[]

___

### order\_meta\_data

• **order\_meta\_data**: [`IOrderMetaData`](IOrderMetaData.md)

___

### order\_total

• **order\_total**: `number`

___

### payments

• **payments**: [`IPayment`](IPayment.md)[]

___

### resumable\_link

• **resumable\_link**: ``null`` | `string`

___

### shipping

• **shipping**: [`IShipping`](IShipping.md)

___

### taxes

• **taxes**: [`ITax`](ITax.md)[]
