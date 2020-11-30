@if (is_page("Home") || is_page("FAQ"))
<header id="ts-hero" class="ts-full-screen">
@else
<header>
@endif
  <!--NAVIGATION ******************************************************************************************-->
  <nav class="navbar navbar-expand-lg in navbar-dark fixed-top ts-separate-bg-element" data-bg-color="#FEAE51">
      <div class="container">
          <a class="navbar-brand" href="/">
              <img src="assets/img/logoWhite.svg" class="brandLogo" alt="I'm In logo">
          </a>
          <!--end navbar-brand-->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <!--end navbar-toggler-->
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                      <a class="nav-link ts-scroll" href="/">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle ts-scroll" href="#" id="homeDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Features
                      </a>
                      <div class="dropdown-menu" aria-labelledby="homeDropdown">
                        <a class="dropdown-item ts-scroll" href="/#students">Student features</a>
                        <a class="dropdown-item ts-scroll" href="/#parents">Parent features</a>
                        <a class="dropdown-item ts-scroll" href="/#looks">How it looks</a>
                      </div>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link ts-scroll" href="/FAQ/">FAQ</a>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle ts-scroll" href="#" id="legalDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Legal
                      </a>
                      <div class="dropdown-menu" aria-labelledby="legalDropdown">
                        <a class="dropdown-item" href="/terms-conditions/">Terms & Conditions</a>
                        <a class="dropdown-item" href="/privacy-policy/">Privacy Policy</a>
                      </div>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link ts-scroll" href="https://twitter.com/IMIN_AP"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li class="nav-item">
                      <a class=" nav-link ts-scroll" href="https://www.facebook.com/IMIN.FB/"><i class="fab fa-facebook"></i></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link ts-scroll" href="https://www.instagram.com/iminapcom/"><i class="fab fa-instagram"></i></a>
                  </li>
              </ul>
              <!--end navbar-nav-->
              <a class="nav-link ts-scroll btn btn-primary btn-sm text-white ml-3 px-3 ts-width__auto" href="https://app.iminap.com">Sign In</a>
          </div>
          <!--end collapse-->
      </div>
      <!--end container-->
  </nav>
  <!--end navbar-->

  @include("partials/hero")
</header>