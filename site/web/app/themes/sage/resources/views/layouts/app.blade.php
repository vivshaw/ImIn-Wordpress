<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body @php body_class() @endphp data-spy="scroll" data-target=".navbar" data-bg-parallax="scroll" data-bg-parallax-speed="3">
    <div class="ts-page-wrapper" id="page-top">  
      @php do_action('get_header') @endphp
      @include('partials.header')

      <main id="ts-main">
        @if (is_page("Home"))
          @yield('content')
        @else
          <div class="container">
            @yield('content')
          </div>
        @endif
      </main>

      @if (App\display_sidebar())
        <aside class="sidebar">
          @include('partials.sidebar')
        </aside>
      @endif

      @php do_action('get_footer') @endphp
      @include('partials.footer')
      @php wp_footer() @endphp
    </div>
  </body>
</html>
