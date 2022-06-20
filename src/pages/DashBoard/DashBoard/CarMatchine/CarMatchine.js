// import React from 'react';
// import { Alert, Button, TextField, Typography } from '@mui/material';
// import { useState } from 'react';

// const CarMatchine = () => {
//     const [addProduct, setAddProduct] = useState([])
//     const [addSuccess, setAddSuccess] = useState(false)

//     const handleonBlur = (e) => {
//         e.preventDefault()
//         const field = e.target.name;
//         const value = e.target.value;
//         const newAddProduct = { ...addProduct };
//         newAddProduct[field] = value;
//         setAddProduct(newAddProduct)
//         console.log(newAddProduct)
//     }

//     const handleProduct = (e) => {
//         e.preventDefault()
//         fetch('https://calm-everglades-03915.herokuapp.com/ace', {
//             method: 'POST',
//             headers: {
//                 'content-type':'application/json'
//             },
//             body: JSON.stringify(addProduct)
//         })
//         .then(res=> res.json())
//         .then(data=> {
//             console.log(data)
//             if(data.insertedId){
//                 // console.log(data)
//                 setAddSuccess(true)
//             }
//         })
//     }
//     return (
//         <>
//          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
//                 ADD A CAR MATCHINE**
//             </Typography>
//             {addSuccess && <Alert sx={{width: "75%", marginLeft: 18, mb: 2}} severity="success">Add Product Successfully</Alert>}
//             <form onSubmit={handleProduct}>
//                 <TextField
//                     sx={{ width: "75%", m: 1 }}
//                     required
//                     id="standard-basic"
//                     label="Part No"
//                     name="price"
//                     onBlur={handleonBlur}
//                     type="text"
//                     variant="standard" />
                    
//                 <TextField
//                     sx={{ width: "75%", m: 1 }}
//                     required
//                     id="standard-basic"
//                     label="Car Name"
//                     name="Carname"
//                     onBlur={handleonBlur}
//                     type="text"
//                     variant="standard" />


//                 <TextField
//                     sx={{ width: "75%", m: 1 }}
//                     required
//                     id="standard-basic"
//                     label="Picture"
//                     name="url"
//                     onBlur={handleonBlur}
//                     type="text"
//                     variant="standard" />

//                 <TextField
//                     sx={{ width: "75%", m: 1 }}
//                     required
//                     id="standard-basic"
//                     label="Price"
//                     name="partNo"
//                     onBlur={handleonBlur}
//                     type="text"
//                     variant="standard" />

//                 <TextField
//                     sx={{ width: "75%", m: 1 }}
//                     required
//                     id="standard-basic"
//                     label="Type"
//                     name="type"
//                     onBlur={handleonBlur}
//                     type="text"
//                     variant="standard" />

//                 <TextField
//                     sx={{ width: "75%", m: 1 }}
//                     required
//                     id="standard-basic"
//                     label="Condition"
//                     name="condition"
//                     onBlur={handleonBlur}
//                     type="text"
//                     variant="standard" />

//                 <TextField
//                     sx={{ width: "75%", m: 1 }}
//                     required
//                     id="standard-basic"
//                     label="In-Stock"
//                     name="instock"
//                     onBlur={handleonBlur}
//                     type="text-area"
//                     variant="standard" />

//                 <TextField
//                     sx={{ width: "75%", m: 1 }}
//                     required
//                     id="standard-basic"
//                     label="Block"
//                     name="Block"
//                     onBlur={handleonBlur}
//                     type="text-area"
//                     variant="standard" />

//                 <TextField
//                     sx={{ width: "75%", m: 1 }}
//                     required
//                     id="standard-basic"
//                     label="Self-Name"
//                     name="selfName"
//                     onBlur={handleonBlur}
//                     type="text-area"
//                     variant="standard" />

//                 <TextField
//                     sx={{ width: "75%", m: 1 }}
//                     required
//                     id="standard-basic"
//                     label="Side"
//                     name="side"
//                     onBlur={handleonBlur}
//                     type="text-area"
//                     variant="standard" />

//                 <Button sx={{ width: "75%", m: 3 }} type="submit" variant="contained">Add Product</Button>
//             </form>   
//         </>
//     );
// };

// export default CarMatchine;