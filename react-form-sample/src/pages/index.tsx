import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";

/** フォームの型 */
type FormValues = {
  name: string;
  email: string;
};

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  console.log(watch("name"), watch("email"));
  return (
    <main>
      {/* "handleSubmit" は "onSubmit" を実行する前に入力検証を行う */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* registerを使いhookに認知させる */}
        <input
          id="name"
          defaultValue="a"
          {...register("name", { required: true })}
          style={{ border: "1px solid #8e8e8e" }}
        />
        {errors.name && <span>氏名は必須項目です</span>}
        <input
          id="email"
          {...register("email")}
          style={{ border: "1px solid #8e8e8e" }}
        />

        <input type="submit" style={{ border: "1px solid #8e8e8e" }} />
      </form>
    </main>
  );
};

export default Home;
