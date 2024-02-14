import { useRouter } from "next/router";
import DetailsItemPage from "../../../Templates/Shop/Details/DetailsPage";
function TemplatesPageDetail() {
  const router = useRouter();
  const { id } = router.query;


  
  if (!id) {
    return <div>Loading...</div>;
  }

  console.log(id);
  return (
    <>
      <DetailsItemPage />
    </>
  );
}

export default TemplatesPageDetail;
