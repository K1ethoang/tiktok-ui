# Usage API

-   nếu cho người dùng nhập tự do thì luôn luôn phải có `encodeURIComponent`

` fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)`
