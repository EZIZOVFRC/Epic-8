
    import React, { useContext, useEffect } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { Formik } from 'formik'
    
    const Add = () => {
        const deleteData=(itemId)=>{
          
                axios.delete(`http://localhost:8080/api/products/${itemId}`).then((res)=>{
                    const newData =data.filter((x)=>x._id!=itemId)
                    setdata([...newData])
                })
            
        }
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Add</title>
                </Helmet>
                <div>
                <Formik
       initialValues={{ image: '', title: '',price:'',desc:'' }}
       
       onSubmit={(values, { setSubmitting }) => {
        
            axios.post('http://localhost:8080/api/products',{
                id:uuidv4(),
                image:values.image,
                title:values.title,
                price:values.price,
                desc:values.desc,
            }).then((res)=>{
                setdata([...res.data])
                console.log('Data elave olundu',res);
            })
         
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
             placeholder='image...'
           />
           <input
             type="text"
             name="title"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
             placeholder='title...'
           />
           <input
             type="text"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
             placeholder='price...'
           />
           <input
             type="text"
             name="desc"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.desc}
             placeholder='desc..'
           />
           <button type="submit" >
             Submit
           </button>
         </form>
       )}
     </Formik>


            <div className="tab">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((item)=>{
      return   <tr key={item._id}>
      <th scope="row"><img src={item.image} style={{width:'80px'}} alt="" /></th>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td><button onClick={()=>{
        deleteData(item._id)
      }}>Delete</button></td>
    </tr>
      })
    }
  </tbody>
</table>
            </div>
     
                </div>
        </>
        )
    }
    
    export default Add
        