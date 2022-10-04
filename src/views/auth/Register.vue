<template>
  <section className='my-5 py-5'>
      <div className="container">
          <div className="row">
              <div className="col-md-4 offset-md-4 mb-2">
                  <div className="card shadow">
                  <div className="card-header bg-primary"><h5 className='text-center text-white'>Sign Up</h5></div>
                      <div className="card-body py-2">
                          <p className='text-center mt-3'>Already register <Link to="/login"> Sign In </Link> </p>
                          <div className="mb-3"></div>
                          <form onSubmit={login}>
                            <label htmlFor="full name">Full Name</label>
                            <input type="text" name="name" className="form-control mb-2" placeholder="e.g. John Doe" aria-label="Email" />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="form-control mb-2" placeholder="email@example.com" aria-label="Email" />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control mb-2" placeholder="********" aria-label="Password" />
                            <button className="btn btn-sm btn-primary w-100" type="submit" onClick={login}>Submit</button>
                            
                            <p className='text-center mt-3'>Forgot <Link to="/login"> Password? </Link> </p>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <h3>GREAT SERVICES</h3>
            <div className="sub-underline mt-3"></div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="card">
              <div className="card-body">
                <h4>Service MP 1</h4>
                <div className="mb-3"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente repellendus, dignissimos perspiciatis accusamus consectetur minima tenetur voluptate expedita quidem, est eaque recusandae aspernatur magni, vitae porro dolor natus unde?</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="card">
              <div className="card-body">
                <h4>Service MP 1</h4>
                <div className="mb-3"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente repellendus, dignissimos perspiciatis accusamus consectetur minima tenetur voluptate expedita quidem, est eaque recusandae aspernatur magni, vitae porro dolor natus unde?</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="card shadow">
              <div className="card-body">
                <h4>Service MP 1</h4>
                <div className="mb-3"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente repellendus, dignissimos perspiciatis accusamus consectetur minima tenetur voluptate expedita quidem, est eaque recusandae aspernatur magni, vitae porro dolor natus unde?</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className='mnp px-5 py-5'>
      <div className="container">
        <div className="row bg-light">
        <h2 className='text-center'>Company Data</h2>
        <div className="mb-3"></div>
          <div className="col-md-6 col-md-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Position</th>
                  <th>Design</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Onayemi</td>
                  <td>onays@gmail.com</td>
                  <td>5646767879</td>
                  <td>htfyashjkll</td>
                  <td>gfsgajjkas</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Onayemi</td>
                  <td>onays@gmail.com</td>
                  <td>5646767879</td>
                  <td>htfyashjkll</td>
                  <td>gfsgajjkas</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Onayemi</td>
                  <td>onays@gmail.com</td>
                  <td>5646767879</td>
                  <td>htfyashjkll</td>
                  <td>gfsgajjkas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import PublicTemplate from '../PublicTemplate.vue'

</script>

<style scoped>

</style>