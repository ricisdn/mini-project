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
      });
