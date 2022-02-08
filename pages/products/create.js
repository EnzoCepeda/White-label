import NewProduct from "@/components/products/NewProduct";
import StoreHeading from "@/components/StoreHeading";
import * as brandsService from 'services/brandService';
import * as categoriesService from "services/categoriesService";

const Create = ({brands, categories}) => {
    return(
        <div className="min-h-screen">
            <StoreHeading title="Nuevo Articulo"/>
            <NewProduct brands={brands} categories={categories}/>
        </div>
    )
}

export async function getServerSideProps() {
    const categories = await categoriesService.findAll();
    console.log("categories", categories);
    const brands = await brandsService.findAll();
    console.log("brands", brands);
    return {
      props: {
        brands,
        categories
      },
    }
  }
  

export default Create;

