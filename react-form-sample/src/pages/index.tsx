import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { Stack } from "../components/atoms/Stack";

/** フォームの型 */
type FormValues = {
  name: string;
  email: string;
  gender: string;
  domestic: boolean;
  abroad: boolean;
  space: boolean;
};

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      domestic: false,
      abroad: false,
      space: false,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  /**
   * 各項目のログ監視用 コメントアウトして利用する
   */
  console.log("name:", watch("name"));
  console.log("email:", watch("email"));
  console.log("gender:", watch("gender"));
  console.log("travel:", watch("domestic"), watch("abroad"), watch("space"));
  return (
    <main>
      {/* "handleSubmit" は "onSubmit" を実行する前に入力検証を行う */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tr>
            <th>
              <label htmlFor="name">氏名</label>
            </th>
            <td>
              <input
                id="name"
                {...register("name", { required: true })}
                style={{
                  border: `${
                    errors.name ? "1px solid red" : "1px solid #8e8e8e"
                  }`,
                }}
              />
              {errors.name && (
                <span style={{ color: "red" }}>氏名は必須項目です</span>
              )}
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="gender">性別</label>
            </th>
            <td>
              <input
                id="men"
                {...register("gender", { required: true })}
                type="radio"
                name="gender"
                value="men"
              />
              <label htmlFor="men">男性</label>
              <input
                id="women"
                {...register("gender", { required: true })}
                type="radio"
                name="gender"
                value="women"
              />
              <label htmlFor="women">女性</label>
              <input
                id="other"
                {...register("gender", { required: true })}
                type="radio"
                name="gender"
                value="other"
              />
              <label htmlFor="other">未回答</label>
            </td>
            {errors.gender && <span>性別は必須項目です</span>}
          </tr>
          <tr>
            <th>
              <label htmlFor="email">メールアドレス</label>
            </th>
            <td>
              <input
                id="email"
                {...register("email")}
                style={{ border: "1px solid #8e8e8e" }}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label>旅行するなら？（複数選択可）</label>
            </th>
            <td>
              <label htmlFor="domestic">国内</label>
              <input
                id="domestic"
                type="checkbox"
                {...register("domestic")}
                style={{ border: "1px solid #8e8e8e" }}
              />
              <label htmlFor="abroad">海外</label>
              <input
                id="abroad"
                type="checkbox"
                {...register("abroad")}
                style={{ border: "1px solid #8e8e8e" }}
              />
              <label htmlFor="space">宇宙</label>
              <input
                id="space"
                type="checkbox"
                {...register("space")}
                style={{ border: "1px solid #8e8e8e" }}
              />
            </td>
          </tr>
        </table>

        <button type="submit" style={{ border: "1px solid #8e8e8e" }}>
          送信
        </button>
      </form>
    </main>
  );
};

export default Home;
