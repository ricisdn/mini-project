$(document).ready(function() {
        $("#myForm").submit(function(event) {
          event.preventDefault(); // mencegah mengirim form secara default
      
          // Melakukan pengecekan inputan apakah sudah benar/ belum
          var name = $("input[name='name']").val();
          var email = $("input[name='email']").val();
          var message = $("textarea[name='message']").val();
          
          // memberi alert apabila kolom inputan masih kosong
          if (name === "" || email === "" || message === "") {
            alert("Harap mengisi form dengan benar terlebih dahulu !!");
          } else if (confirm("Apakah Anda yakin ingin mengirim formulir?")) {
            $(this).unbind("submit").submit();
          } else {
            window.location.reload();
            // form tidak akan terkirim jika user menekan Cancel
          }
        });

        // Back to top
        $(window).scroll(function () {
          // Ini adalah event handler yang akan dipanggil saat pengguna melakukan scrolling pada halaman.
      
          if ($(this).scrollTop() > 20) {
            // Jika jarak scroll dari atas lebih dari 20 piksel, maka kondisi ini terpenuhi.
      
            $('#btn-back-to-top').addClass('show');
            // Menambahkan kelas 'show' ke tombol "Back to Top". Ini akan membuat tombol muncul.
          } else {
            $('#btn-back-to-top').removeClass('show');
            // Menghapus kelas 'show' dari tombol "Back to Top". Ini akan membuat tombol menghilang.
          }
        });
      
        // Scroll to top when the button is clicked
        $('#btn-back-to-top').click(function () {
          // Ini adalah event handler yang akan dipanggil ketika tombol "Back to Top" diklik.
      
          $('html, body').animate({ scrollTop: 0 }, 'slow');
          // Ini menggunakan metode jQuery "animate" untuk menganimasikan scrolling halaman kembali ke posisi paling atas (0 piksel).
          // 'slow' adalah durasi animasi (dalam milidetik) untuk pergerakan kembali ke atas dengan kecepatan lambat.
        });
      });
