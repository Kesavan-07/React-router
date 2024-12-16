# **Shopping Cart Application 🛒**

## ** 📌Overview 🏌️‍♀️**

This is a React.js application that simulates an e-commerce experience by interacting with the Fake Store API to fetch and display products. It features a product page, a cart page, and the ability to add/remove items from the cart, along with a dynamic total price calculation.🏌️‍♀

## **Features 🔎**

- **Product Listing Page**
  - Fetches a list of products from the Fake Store API and displays them in a responsive layout.
  - Each product card displays:
    - Product Image
    - Title
    - Price
    - Description
  - Includes an "Add to Cart" button that adds the selected product to the cart.
  - If the product is already in the cart, the button changes to "Remove from Cart," allowing the user to remove it.

- ** 🔔Cart Page 🛍️**
  - Displays all items added to the cart with detailed information:
    - Product Image
    - Title
    - Price
    - Total Price (Price × Quantity)
  - Users can adjust the quantity of each product using "Increase" and "Decrease" buttons.
  - Dynamically updates the cart's total price and applies a 10% discount on the total amount.
  - Includes a "Remove from Cart" button to delete individual items from the cart.

- **👈Routing👉**
  - Proper routing between the 📤Product Page and the Cart Page 📥 is implemented using React Router.


This task description explains the project objectives, key features, and tools used, making it ideal for the README file. Let me know if you need help writing the complete README! 😊






## Tech Stack 🧑‍💻
##### Html
##### Tailwindcss /css ![icons8-tailwindcss-48](https://github.com/user-attachments/assets/035dce74-609c-424d-b12a-dde8a68ec0b6)

##### Javascript ![icons8-js](https://github.com/user-attachments/assets/10c8976d-b45f-41d5-8a97-a62a0b0c5fd2)
##### React  ![icons8-react](https://github.com/user-attachments/assets/3f6bdb40-b7a6-4476-9caf-ffb9cf48287f)
##### React-router


## Screenshots

#### landing page web view

![lap landing pic1](https://github.com/user-attachments/assets/ffb1474a-0e7a-48bc-86d9-10984b982302)


#### pic 2 cart value displayed in nav bar

![lap  with cart value and button hover pic 2](https://github.com/user-attachments/assets/2a7f15e6-2ef9-4579-ae2f-15691552f4e4)

#### with no cart value  empty cart page

![lap cart pic  no cart value 4](https://github.com/user-attachments/assets/5dc170f6-6471-4ae0-be31-a05b69828329)


####routing  Cart details on cart page 

![lap cart pic 3](https://github.com/user-attachments/assets/33753d06-6195-44f3-a25f-5a347de3dbf3)

#### mobile  responsive view

![mobile landing pic 1](https://github.com/user-attachments/assets/1623d98d-3422-4103-b6a0-8e316dc5a890)

#### mobile  responsive view cart details

![movile cart pic 2](https://github.com/user-attachments/assets/56d59e3b-377b-4fa1-8610-ae1d80b11956)

#### mobile  responsive view cart details amount summary

![mobile cart pic 3](https://github.com/user-attachments/assets/aea726ef-ad63-4440-85f0-361f3421e4be)








## Demo-Clip

#### web view 

https://github.com/user-attachments/assets/45ff65f2-eaa5-4dfe-92ec-1d1fea2b9f88


#### Mobile Responsive view 
https://github.com/user-attachments/assets/7352d21e-773a-4207-afab-8176c0afd2ca





## Deployment -Url

https://shopping-cart-demo-withrouting.netlify.app/


# Installation

- Install my-project with npm

## project-configurations

#### React project creation

```bash
 npm create vite@latest

```
#### Tailwind initilation
```bash
npm install -D tailwindcss postcss autoprefixer
```
#### Tailwind config
```bash
npx tailwindcss init -p
```
#### To run the project
```bash
  npm run dev
```
#### For routing package 
```bash
npm install react-router-dom@V6
```


## API Reference


#### GET
```http
https://fakestoreapi.com/products
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

