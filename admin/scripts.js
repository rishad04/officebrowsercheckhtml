// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle
  const toggleBtn = document.querySelector('.toggle-btn');
  const sidebar = document.querySelector('.sidebar');
  toggleBtn?.addEventListener('click', () => sidebar.classList.toggle('collapsed'));

  // Tags input
  document.querySelectorAll('.tags-input').forEach(wrapper => {
    const input = wrapper.querySelector('input');
    input.addEventListener('keypress', e => {
      if (e.key === 'Enter' && input.value.trim()) {
        const tag = document.createElement('span');
        tag.textContent = input.value.trim();
        tag.addEventListener('click', () => tag.remove());
        wrapper.insertBefore(tag, input);
        input.value = '';
      }
    });
  });

  // File uploader
  document.querySelectorAll('.file-upload').forEach(el => {
    const [input, preview] = [el.querySelector('input[type=file]'), el.querySelector('.preview')];
    input?.addEventListener('change', () => {
      const files = Array.from(input.files);
      preview.innerHTML = '';
      files.forEach(f => {
        const item = document.createElement('div'); item.textContent = f.name;
        preview.appendChild(item);
      });
    });
  });
});
