import PageHeadingButtons from "@/components/PageheadingButton";

const Create = () => {
  async function onSubmit(data: any) {
    try {
      await createProduct(data);
      // Handle success (redirect, show toast, etc.)
    } catch (error) {
      // Handle error
    }
  }

  
  return (
    <>
      <PageHeadingButtons heading={"Add New Product"} />
      <ProductForm onSubmit={onSubmit} />
    </>
  );
};

export default Create;
