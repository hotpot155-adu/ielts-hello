// Bộ đếm số từ cho ô viết bài Writing Task 2

const MIN_WORDS = 150;

const essay = document.getElementById("essay");
const wordCount = document.getElementById("word-count");

// Đếm số từ: bỏ khoảng trắng hai đầu, rồi tách theo một hoặc nhiều khoảng trắng
// (dấu cách, xuống dòng, tab). Chuỗi rỗng thì là 0 từ.
function countWords(text) {
  const trimmed = text.trim();
  if (trimmed === "") {
    return 0;
  }
  return trimmed.split(/\s+/).length;
}

function updateWordCount() {
  const count = countWords(essay.value);
  wordCount.textContent = count + " words";
if (count < MIN_WORDS) {
    wordCount.classList.add("is-short");
    wordCount.classList.remove("is-enough");
  } else {
    wordCount.classList.add("is-enough");
    wordCount.classList.remove("is-short");
  } 
}

// Chạy lại mỗi khi người dùng gõ, dán hoặc xoá chữ
essay.addEventListener("input", updateWordCount);

// Chạy một lần lúc mở trang để hiện "0 words" với màu đúng ngay từ đầu
updateWordCount();
