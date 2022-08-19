import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger
  } = useForm();

  const onSubmit = (data) => {
    console.log("dataForm====", data);
    reset();
  };

  // console.log(watch());

  // console.log(errors.name)
  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-padding">
            <div className="form-group">
              <label className="col-form-label">Họ và tên :</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Hãy nhập tên của bạn" })}
                onKeyUp={() => {
                  trigger("name");
                }}
                placeholder="Nhập tên người nhân hàng"
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Địa chỉ nhận hàng :</label>
              <input
                type="text"
                className={`form-control ${errors.address && "invalid"}`}
                {...register("address", { required: "Hãy nhập địa chỉ" })}
                onKeyUp={() => {
                  trigger("address");
                }}
                placeholder="Nhập địa chỉ nhân hàng"
              />
              {errors.address && (
                <small className="text-danger">{errors.address.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  required: "Hãy nhập email của bạn",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Không đúng địa chỉ email"
                  }
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Phone:</label>
              <input
                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", {
                  required: "Hãy nhập số điện thoại",
                  pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "Nhập số điện thoại"
                  }
                })}
                onKeyUp={() => {
                  trigger("phone");
                }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Ghi chú:</label>
              <textarea
                rows="7"
                className={`form-control textarea ${
                  errors.message && "invalid"
                }`}
                {...register("message", {
                  required: "Hãy nhập ghi chú thêm cho sản phẩm.",
                  minLength: {
                    value: 10,
                    message: "Tối thiểu 10 kí tự."
                  },
                  maxLength: {
                    value: 500,
                    message: "Tối đa 500 kí tự."
                  }
                })}
                onKeyUp={() => {
                  trigger("message");
                }}
              ></textarea>
              <div className=""></div>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>
            </div>
            <input
              type="submit"
              className="btn btn-primary my-3 btn-submit"
              value="Đặt hàng ngay"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
