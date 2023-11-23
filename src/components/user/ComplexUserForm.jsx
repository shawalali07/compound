import { Modal } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import { rolesSchema } from "../../schema/schema";
import { AddOutlined, Close, PlusOne } from "@mui/icons-material";

const ComplexUserForm = ({
  open,
  onClose,
  id,
  useUserInfo,
  useAddUser,
  useUpdateUser,
}) => {
  const { form } = useForm(
    id,
    useUserInfo,
    useAddUser,
    useUpdateUser,
    rolesSchema,
  );

  const { formValues, onChange, onSave, handleSubmit, errors, register } = form;

  const dialog = {
    title: id ? "Edit" : "Add",
    btnText: id ? "Update" : "Create",
  };
  return (
    <div>
      <Modal
        onHide={onClose}
        show={open}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <form style={{ padding: "20px" }} onSubmit={handleSubmit(onSave)}>
          <Modal.Title id='contained-modal-title-vcenter'>
            <div className='d-flex justify-content-between'>
              <h3 className='modal-maintitle1 pt-2'>{dialog.title} </h3>
              <div onClick={onClose}>
                <Close />
              </div>
            </div>
          </Modal.Title>
          <hr className='solid '></hr>

          <div className='row'>
            <div className='col-lg-6'>
              <div className='names-roles1r'>
                <label
                  style={{ width: "100%" }}
                  htmlFor='title'
                  className='cursor-pointer'
                >
                  First Name
                </label>
              </div>
              <input
                style={{ width: "90%", border: "none" }}
                className='border1 '
                type='text'
                id='firstName'
                name='firstName'
              />
              <hr className='solid roles-solid33'></hr>
            </div>
            <div className='col-lg-6'>
              <div className='names-roles1r'>
                <label
                  style={{ width: "100%" }}
                  htmlFor='title'
                  className='cursor-pointer'
                >
                  Last Name
                </label>
              </div>
              <input
                style={{ width: "90%", border: "none" }}
                className='border1 '
                type='text'
                id='lastName'
                name='lastName'
              />
              <hr className='solid roles-solid33'></hr>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6'>
              <div className='d-flex justify-content-between '>
                <div className='names-roles1r'>
                  <label
                    style={{
                      width: "100%",
                      border: "none",
                    }}
                    htmlFor='title'
                    className='cursor-pointer mt-1'
                  >
                    Role Types
                  </label>
                </div>
                <div className='plus-1'>
                  <AddOutlined />
                </div>
              </div>

              <hr className='solid roles-solid33'></hr>
            </div>
            <div className='col-lg-6'>
              <div className='d-flex justify-content-between '>
                <div className='names-roles1r'>
                  <label
                    style={{ width: "100%", border: "none" }}
                    htmlFor='title'
                    className='cursor-pointer mt-1'
                  >
                    Roles
                  </label>
                </div>
                <div className='plus-1'>
                  <AddOutlined />
                </div>
              </div>

              <hr className='solid roles-solid33'></hr>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6'>
              <div className='d-flex justify-content-between '>
                <div className='names-roles1r'>
                  <label
                    style={{ width: "100%", border: "none" }}
                    htmlFor='title'
                    className='cursor-pointer mt-1'
                  >
                    Department
                  </label>
                </div>
                <div className='plus-1'>
                  <AddOutlined />
                </div>
              </div>

              <hr className='solid roles-solid33'></hr>
            </div>
            <div className='col-lg-6'>
              <div className='d-flex justify-content-between '>
                <div className='names-roles1r'>
                  <label
                    style={{ width: "100%" }}
                    htmlFor='title'
                    className='cursor-pointer mt-1'
                  >
                    SLT Link
                  </label>
                </div>
                <div className='plus-1'>
                  <AddOutlined />
                </div>
              </div>

              <hr className='solid roles-solid33'></hr>
            </div>
          </div>
          <div className='row'>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              className='col-lg-6'
            >
              <div className='names-roles1r'>
                <label
                  style={{ width: "100%" }}
                  htmlFor='title'
                  className='cursor-pointer'
                >
                  Phone Number
                </label>
              </div>
              <input
                style={{ width: "90%", border: "none" }}
                className='border1 '
                type='number'
                id='contactNumber'
                name='contactNumber'
              />
              <hr className='solid roles-solid33'></hr>
            </div>
            <div className='col-lg-6'>
              <div className='d-flex justify-content-between '>
                <div className='names-roles1r'>
                  <label
                    style={{ width: "100%" }}
                    htmlFor='title'
                    className='cursor-pointer mt-1'
                  >
                    Line Manager
                  </label>
                </div>
                <div className='plus-1'>
                  <AddOutlined />
                </div>
              </div>

              <hr className='solid roles-solid33'></hr>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='names-roles1r'>
                <label
                  style={{ width: "100%" }}
                  htmlFor='title'
                  className='cursor-pointer'
                >
                  Email
                </label>
              </div>
              <input
                style={{ width: "90%", border: "none" }}
                className='border1 '
                type='email'
                name='email'
              />
              <hr className='solid roles-solid33'></hr>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <div className=' radio-option d-flex'>
                  <label>
                    <input
                      type='checkbox'
                      className='checkboxradio-0012 check-1'
                      name='licensed'
                    />
                  </label>
                </div>
                <div>
                  <div className='roles-manage'>Licensed</div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-between '>
            <div className='col-lg-12'>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <div className=' radio-option d-flex'>
                  <label>
                    <input
                      type='checkbox'
                      className='checkboxradio-0012 check-1'
                      name='licensed'
                    />
                  </label>
                </div>
                <div>
                  <div className='roles-manage'>SYS Admin</div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <div className=' radio-option d-flex'>
                  <label>
                    <input
                      type='checkbox'
                      className='checkboxradio-0012 check-1'
                      name='licensed'
                    />
                  </label>
                </div>
                <div>
                  <div className='roles-manage'>SLT Member</div>
                </div>
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-between '>
            <div></div>
            <div className=' '>
              <button className='Manually-btn21 btn btn-primary'>
                {dialog.btnText}
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ComplexUserForm;
