import React from 'react';

const Teachers = () => {
    return (
        <div className=''>
            <h1 className='p-3 mb-4'>Teachers</h1>
            <hr />

            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ক্রমিক</th>
                        <th scope="col">ছবি	</th>
                        <th scope="col">তথ্য</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">১</th>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" height="100" width="100" alt="" /></td>
                        <td>
                            <p>নাম:---------------</p>
                            <p>পদবী: প্রধান শিক্ষক</p>
                            <p>মোবাইল নম্বর: </p>
                            <p>ই-মেইল এড্রেস:</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">২	</th>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" height="100" width="100" alt="" /></td>
                        <td>
                            <p>নাম: ----------------</p>
                            <p>পদবী: সহকারী প্রধান শিক্ষক</p>
                            <p>মোবাইল নম্বর: </p>
                            <p>ই-মেইল এড্রেস:</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">৩</th>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" height="100" width="100" alt="" /></td>
                        <td>
                            <p>নাম: ----------------</p>
                            <p>পদবী: সহকারী শিক্ষক</p>
                            <p>মোবাইল নম্বর: </p>
                            <p>ই-মেইল এড্রেস:</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">৪</th>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" height="100" width="100" alt="" /></td>
                        <td>
                            <p>নাম: ----------------</p>
                            <p>পদবী: সহকারী শিক্ষক</p>
                            <p>মোবাইল নম্বর: </p>
                            <p>ই-মেইল এড্রেস:</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">৫</th>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" height="100" width="100" alt="" /></td>
                        <td>
                            <p>নাম: ----------------</p>
                            <p>পদবী: সহকারী শিক্ষক</p>
                            <p>মোবাইল নম্বর: </p>
                            <p>ই-মেইল এড্রেস:</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">৬</th>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" height="100" width="100" alt="" /></td>
                        <td>
                            <p>নাম: ----------------</p>
                            <p>পদবী: সহকারী শিক্ষক</p>
                            <p>মোবাইল নম্বর: </p>
                            <p>ই-মেইল এড্রেস:</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">৭</th>
                        <td><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" height="100" width="100" alt="" /></td>
                        <td>
                            <p>নাম: ----------------</p>
                            <p>পদবী: সহকারী শিক্ষক</p>
                            <p>মোবাইল নম্বর: </p>
                            <p>ই-মেইল এড্রেস:</p>
                        </td>
                    </tr>

                </tbody>
            </table>
            <div className='d-flex mb-4'>
                <button className='btn btn-sm'> পূরবর্তী</button>
                <h6 className='p-3'>  ১/১  </h6>
                <button className='btn btn-sm'>পরবর্তী </button>
            </div>
        </div>
    );
};

export default Teachers;