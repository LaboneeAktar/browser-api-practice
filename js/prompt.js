//২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

const showResult = () => {
    const userInputString = prompt('Please Enter a number: ');
    const userInput = parseInt(userInputString);
    const addition = userInput + 200;
    alert(`Here is your output: ${addition}`);
}


//৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও

const showWebsite = () => {
    const show = confirm('Do you want to Show My Website Location?');
    // console.log(show);
    if (show === true) {
        const location = window.location.href;
        console.log(location);
    }
}