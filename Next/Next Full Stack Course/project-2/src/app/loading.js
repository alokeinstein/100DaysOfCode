//loading page is a special file which is used to show the loading state of the application and for that we use suspense component and inside the suspense component we use fallback component and inside the fallback component we put the loading component. You can check it in the app/layout.js
const Loading = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">this is loading page</h1>
    </div>
  )
}

export default Loading
