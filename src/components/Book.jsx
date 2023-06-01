import Form from "./Form";

export default function Book() {
  return (
    <div className="bg-transparent">
      <div className="bg-[url(./assets/webpic/bookbg.jpg)] bg-fixed bg-cover bg-center h-auto">
        <div className="bg-white bg-opacity-90 w-full h-auto flex flex-col items-center">
          <div className=" w-full text-center">
            <p className="mx-auto pt-24 font-head text-4xl text-black  text-center w-auto">
              Book A Table
            </p>
            <p className="mx-auto font-head text-sm pb-20 text-[#666666] text-center w-auto">
              Some Trendy And Popular Courses Offered
            </p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
