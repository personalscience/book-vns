<script>
(function() {
  const lang = navigator.language || navigator.userLanguage;
  if (!window.location.hash && !document.referrer.includes("book-vns/")) {
    if (lang.startsWith("zh")) {
      window.location.href = "zh/";
    } else if (lang.startsWith("en")) {
      window.location.href = "en/";
    }
  }
})();
</script>
