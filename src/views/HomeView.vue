<script setup>
import NavBarView from "@/components/layouts/navbar.vue";
</script>
<template>
  <main data-spy="scroll" data-target="#navbar" data-offset="30">
    <NavBarView />
    <header class="bg-gradient-home" id="home">
      <div class="container-home">
        <h1 class="font-weight-bold">Selamat Datang di IMNHerbalStore!</h1>
        <p class="tagline">
          Temukan Produk Herbal Berkualitas untuk Hidup Sehat! 🌿✨.
        </p>
      </div>
      <div class="img-holder mt-3">
        <img
          src="\public\assets\img\logo\Logo.png"
          alt="gomilk"
          class="img-fluid"
          style="width: 250px; height: auto"
        />
      </div>
    </header>
    <!-- Produk Section -->
    <section id="products" class="products-section py-5">
      <div class="container">
        <h2 class="font-weight-bold home mb-5">Produk Unggulan</h2>
        <div class="row">
          <div class="col-md-4">
            <a href="/gomilk"
              ><div class="card" style="border: 2px solid #28620b !important">
                <img
                  src="\public\assets\img\products\gomilk\gomilk-1.png"
                  class="card-img-top"
                  alt="Gomilk"
                />
                <div class="card-body">
                  <h5 class="card-title">Gomilk</h5>
                  <p class="card-text">
                    Susu kambing berkualitas untuk kesehatan Anda.
                  </p>
                </div>
              </div></a
            >
          </div>
          <div class="col-md-4">
            <a href="/hitawa"
              ><div class="card" style="border: 2px solid #28620b !important">
                <img
                  src="\public\assets\img\products\hitawa\hitawa-1.png"
                  class="card-img-top"
                  alt="Hitawa"
                />
                <div class="card-body">
                  <h5 class="card-title">Hitawa</h5>
                  <p class="card-text">Minuman herbal untuk vitalitas tubuh.</p>
                </div>
              </div></a
            >
          </div>
          <div class="col-md-4">
            <a href="/femile"
              ><div class="card" style="border: 2px solid #28620b !important">
                <img
                  src="\public\assets\img\products\femile\femile-1.png"
                  class="card-img-top"
                  alt="Femile"
                />
                <div class="card-body">
                  <h5 class="card-title">Femile</h5>
                  <p class="card-text">Produk herbal khusus untuk wanita.</p>
                </div>
              </div></a
            >
          </div>
        </div>
      </div>
    </section>
    <div class="section bg-gradient-home p-4">
      <div class="container">
        <div class="call-to-action">
          <div class="row">
            <div class="col-sm-6">
              <h2 class="font-weight-bold mb-5">Temukan Kami</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126648.92678723784!2d112.63368586215465!3d-7.265977165911703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f955265ac4c5%3A0xf3f1477ccd16656b!2sJl.%20Petemon%20IV%20No.157G%2C%20RT.002%2FRW.13%2C%20Petemon%2C%20Kec.%20Sawahan%2C%20Surabaya%2C%20Jawa%20Timur%2060252!5e0!3m2!1sen!2sid!4v1704627115255!5m2!1sen!2sid"
                width="400"
                height="300"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="col-sm-6">
              <h2 class="font-weight-bold mb-3">
                Tertarik untuk mencoba produk kami?
              </h2>
              <br /><br />
              <a
                href="https://wa.me/+6281330865531?text=Halo%20saya%20tertarik%20dengan%20GOMILK..."
                class="btn btn-hubungi home mt-1 mb-3"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                  />
                </svg>
                Pesan Sekarang</a
              ><br />

              <small class="text-white">atau</small><br />
              <a
                href="https://www.tokopedia.com/imnherbalstore"
                class="btn btn-cart home mt-3 mb-3"
              >
                Tokopedia</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer py-4 mt-auto text-center">
      <div class="container px-5">
        <!-- <div class="row align-items-center justify-content flex-column flex-sm-row"> -->
        <div class="col-auto">
          <div class="small m-0 text-white" id="copyright"></div>
        </div>

        <!-- </div> -->
      </div>
    </footer>
  </main>
</template>
<script>
document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  var copyrightElement = document.getElementById("copyright");
  var linkedinBadge = document.querySelector(".LI-profile-badge");

  var startYear = 2017;
  var linkedinText =
    "Developed with ♥ by <a class='link-footer text-white' href='https://www.linkedin.com/in/isaiman/' onmouseover='showLinkedinBadge()' onmouseout='hideLinkedinBadge()'>Isa Iman Muhammad</a>";

  var copyrightText = "Copyright &copy; " + currentYear + " | " + linkedinText;

  copyrightElement.innerHTML = copyrightText;

  function showLinkedinBadge() {
    linkedinBadge.style.display = "block";
  }

  function hideLinkedinBadge() {
    linkedinBadge.style.display = "none";
  }
});
</script>
