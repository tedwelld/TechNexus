/** Runs before paint to avoid a light-theme flash during night hours. */
export function TimeThemeScript() {
  const code = `
(function () {
  try {
    var hour = new Date().getHours();
    var theme = (hour >= 18 || hour < 6) ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: code }}
      suppressHydrationWarning
    />
  );
}
