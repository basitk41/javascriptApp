export const form = () => {
  const form = `<div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <br />
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Email" />
                            </div>
                            <br />
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" placeholder="Password" />
                            </div>
                            <br />
                            <div class="form-group">
                                <input type="button" class="btn btn-success" id="log1" value="Sign in" />
                                <input type="button" class="btn btn-info" id="log2" value="Register" />
                            </div>
                        </div>
                    </div>
                </div>`;
  return form;
};
