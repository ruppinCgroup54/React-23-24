
export default function Register() {









  return (
    <form className="row g-3 w-75 m-auto">

      <div className="col-md-12 ">
        <div className="input-group mb-3 flex-nowrap ">
          <span className="input-group-text">@</span>
          <div className="form-floating flex-grow-1 ">
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
            <label htmlFor="inputEmail">Email</label>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="input-group mb-3 flex-nowrap">
          <span className="input-group-text">*</span>
          <div className="form-floating flex-grow-1">
            <input type="password" className="form-control" id="inputPass" placeholder="Password" autoComplete="current-password" />
            <label htmlFor="inputPass">Password</label>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="input-group mb-3 flex-nowrap">
          <span className="input-group-text">*</span>
          <div className="form-floating flex-grow-1">
            <input type="password" className="form-control" id="inputConformPass" placeholder="Password" />
            <label htmlFor="inputConformPass"> Conform Password</label>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="input-group mb-3 flex-nowrap">
          <span className="input-group-text">*</span>
          <div className="form-floating flex-grow-1 ">
            <input type="text" className="form-control" id="inputFName" placeholder="First name" />
            <label htmlFor="inputFName"> First name</label>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="input-group mb-3 flex-nowrap">
          <span className="input-group-text">*</span>
          <div className="form-floating flex-grow-1">
            <input type="text" className="form-control" id="inputUserName" maxLength={60} placeholder="User Name" pattern="" />
            <label htmlFor="inputUserName"> User Name</label>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="form-floating ">
          <input type="date" className="form-control" id="inputDOB" placeholder="User Name" />
          <label htmlFor="inputDOB"> Date of birth</label>
        </div>
      </div>


      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">Upload image</label>
        <input type="file" class="form-control" id="inputGroupFile01" />
      </div>

      <div className="col-md-4">
        <div className="form-floating ">

          <input list="inputCity" className="form-control" name="city" />
          <label htmlFor="city" className="form-label">City</label>

          <datalist id="inputCity" >
            <option value='...' />
          </datalist>
        </div>
      </div>

      <div className="col-md-4">
        <div className="form-floating ">
          <input id="inputStreet" className="form-control" name="street" placeholder="Street" />
          <label htmlFor="street" >Street</label>
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-floating ">
          <input type='number' id="inputStreet" className="form-control" name="HouseNumber" placeholder="House number" />
          <label htmlFor="HouseNumber" >House Number</label>
        </div>
      </div>


      <div className="col-12">
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </form>
  )
}
