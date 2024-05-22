<h1>Mobile Gallery</h1>
Its one of the backend server for Mobile Gallery. Here I have used some technology.

<h3>Technology</h3>
Express, Mongose, MongoDB, TypeScript, Validation for Zod,

<h3>Live Link</h3>
https://mobile-gallery-inky.vercel.app

<h3>Github Link</h3>
https://github.com/sohel-tech4/mobile-gallery

<h3>How to use this backend:</h3>

### **1. Create a New Product**

<p>To post New product You need to use this method</p>

- **Endpoint**: **`/api/products`**
- **Method:** `POST`
- **Sample Request Body**:
  ```json
  {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB"
      }
    ],
    "inventory": {
      "quantity": 50,
      "inStock": true
    }
  }
  ```
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Product created successfully!",
    "data": {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 50,
        "inStock": true
      }
    }
  }
  ```

### **2. Retrieve a List of All Products**

<p>To see the all products You need to use this method</p>

- **Endpoint**: **`/api/products`**
- **Method:** `GET`
- **Sample Response**:
  <p>Finally it will show this result</p>

  ```json
  {
    "success": true,
    "message": "Products fetched successfully!",
    "data": [
      {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
          {
            "type": "Color",
            "value": "Midnight Blue"
          },
          {
            "type": "Storage Capacity",
            "value": "256GB"
          }
        ],
        "inventory": {
          "quantity": 50,
          "inStock": true
        }
      },
      {
        "name": "Samsung Galaxy S21",
        "description": "High-performance Android smartphone with advanced camera capabilities.",
        "price": 799,
        "category": "Electronics",
        "tags": ["smartphone", "Samsung", "Android"],
        "variants": [
          {
            "type": "Color",
            "value": "Phantom Black"
          },
          {
            "type": "Storage Capacity",
            "value": "128GB"
          }
        ],
        "inventory": {
          "quantity": 30,
          "inStock": true
        }
      }
      // Will show more data...
    ]
  }
  ```

### **3. Retrieve a Specific Product by ID**

<p>If client need to search product by ID he needs to use this method</p>

- **Endpoint**: **`/api/products/:productId`**
<p>:productId > Here you give an ID of any products</p>

- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Product fetched successfully!",
    "data": {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 50,
        "inStock": true
      }
    }
  }
  ```

### **4. Update Product Information**

<p>If client need to update any product he can use ID to update this product</p>

- **Endpoint**: **`/api/products/:productId`**
<p>:productId > Here you give an ID of any products and give update data in body</p>

- **Method: `PUT`**
- **Sample Request Body**:
  ```json
  {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB"
      }
    ],
    "inventory": {
      "quantity": 50,
      "inStock": true
    }
  }
  ```
- **Sample Response**:
    <p>Finally it will show this result</p>

  ```json
  {
    "success": true,
    "message": "Product updated successfully!",
    "data": {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 49,
        "inStock": true
      }
    }
  }
  ```

### **5. Delete a Product**

<p>If somone want to delete some product he can use DELETE method</p>

- **Endpoint**: **`/api/products/:productId`**
<p>:productId > Here you give an ID for Delte</p>

- **Method: `DELETE`**
- **Sample Response**:
  <p>Finally it will show this result</p>

  ```json
  {
    "success": true,
    "message": "Product deleted successfully!",
    "data": null
  }

  // The product should be deleted from the database.
  ```

### **6. Search a product**

<p>To Search Product you can use this term. Here you can search in category, title, tags</p>

- **Endpoint**: `/api/products?searchTerm=iphone`

<p>/api/products?searchTerm=iphone: Here it searching by name like iphone.</p>

- **Method: GET**
- **Sample Response**:

```jsx
{
    "success": true,
    "message": "Products matching search term 'iphone' fetched successfully!",
    "data": [
        {
            "name": "iPhone 13 Pro",
            "description": "The latest flagship iPhone model with advanced camera features.",
            "price": 999,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Graphite"
                },
                {
                    "type": "Storage",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        },
        {
            "name": "iPhone SE",
            "description": "Compact and affordable iPhone model with powerful performance.",
            "price": 399,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "White"
                },
                {
                    "type": "Storage",
                    "value": "128GB"
                }
            ],
            "inventory": {
                "quantity": 20,
                "inStock": true
            }
        }
    ]
}
```

## Order Management

### **Order Management API Endpoints**

### **1.To Create a New Order**

<p>To create new order we will use this method POST</p>

- **Endpoint**: **`/api/orders`**
- **Method: `POST`**
- **Request Body**:
  ```json
  {
    "email": "level2@programming-hero.com",
    "productId": "5fd67e890b60c903cd8544a3",
    "price": 999,
    "quantity": 1
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Order created successfully!",
    "data": {
      "email": "level2@programming-hero.com",
      "productId": "5fd67e890b60c903cd8544a3",
      "price": 999,
      "quantity": 1
    }
  }
  ```

### **2.To See All Orders**

<p>To see all orders we will use this methodd</p>

- **Endpoint**: **`/api/orders`**
- **Method: `GET`**
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Orders fetched successfully!",
    "data": [
      {
        "email": "level2@programming-hero.com",
        "productId": "5fd67e890b60c903cd8544a3",
        "price": 999,
        "quantity": 1
      }
      // more orders...
    ]
  }
  ```

### **3. Retrieve Orders by User Email**

<p>Which email orders how many products you can see by email</p>

- **Endpoint**: `/api/orders?email=mobile@gmail.com`
- **Method:** `GET`
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Orders fetched successfully for user email!",
    "data": [
      {
        "email": "mobile@gmail.com",
        "productId": "5fd67e890b60c903cd8544a3",
        "price": 999,
        "quantity": 1
      }
      // more orders for the user...
    ]
  }
  ```

## **Error Handling:**

- In this backend server I have also use this Error handling:

### **Sample Error Responses**

- Insufficient Quantity Error

```jsx
{
    "success": false,
    "message": "Insufficient quantity available in inventory"
}
```

- Not Found Error

```jsx
{
 "success": false,
 "message": "Order not found"
}
```

- Not Found Route

```jsx
{
 "success": false,
 "message": "Route not found"
}
```
