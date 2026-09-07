function Manager() {
  const equipments = [
    {
      id: 1,
      name: "ট্রাক্টর",
      stock: 3,
      availability: "উপলভ্য",
      expense: "১৫,৮৬০ – ৪২,৭০০ টাকা/দিন",
      farmers: "১ জন অপারেটর",
    },
    {
      id: 2,
      name: "লাঙল",
      stock: 5,
      availability: "উপলভ্য",
      expense: "ট্রাক্টরের খরচের সাথে যুক্ত",
      farmers: "অতিরিক্ত শ্রমিক প্রয়োজন নেই",
    },
    {
      id: 3,
      name: "ডিস্ক হ্যারো",
      stock: 3,
      availability: "উপলভ্য",
      expense: "ট্রাক্টরের খরচের সাথে যুক্ত",
      farmers: "অতিরিক্ত শ্রমিক প্রয়োজন নেই",
    },
    {
      id: 4,
      name: "সিড ড্রিল",
      stock: 3,
      availability: "উপলভ্য",
      expense: "ট্রাক্টরের খরচ + সহকারীর মজুরি",
      farmers: "২ জন",
    },
    {
      id: 5,
      name: "প্ল্যান্টার",
      stock: 3,
      availability: "উপলভ্য",
      expense: "ট্রাক্টরের খরচ + সহকারীর মজুরি",
      farmers: "২ জন",
    },
    {
      id: 6,
      name: "ন্যাপস্যাক স্প্রেয়ার",
      stock: 10,
      availability: "উপলভ্য",
      expense: "১,৮৩০ – ৪,৮৮০ টাকা/দিন",
      farmers: "১ জন",
    },
    {
      id: 7,
      name: "বুম স্প্রেয়ার",
      stock: 3,
      availability: "উপলভ্য",
      expense: "১২,২০০ – ২৪,৪০০ টাকা/দিন",
      farmers: "১ জন",
    },
    {
      id: 8,
      name: "ড্রিপ / স্প্রিংকলার সেচ",
      stock: 5,
      availability: "উপলভ্য",
      expense: "১,২২০ – ৩,৬৬০ টাকা/দিন",
      farmers: "১ জন",
    },
    {
      id: 9,
      name: "কালটিভেটর",
      stock: 3,
      availability: "উপলভ্য",
      expense: "ট্রাক্টর/ইঞ্জিনের খরচের উপর নির্ভরশীল",
      farmers: "১ জন",
    },
    {
      id: 10,
      name: "থ্রেশার",
      stock: 3,
      availability: "উপলভ্য",
      expense: "২,৪৪০ – ৬,১০০ টাকা/দিন",
      farmers: "৩ – ৫ জন",
    },
  ];

  return (
    <div className="manager-page">

      {/* Header */}
      <div className="manager-header">
        <div>
          <p className="manager-small-title">
            FARMSYNC
          </p>

          <h1>ম্যানেজার ড্যাশবোর্ড</h1>

          <p className="manager-subtitle">
            খামারের যন্ত্রপাতির বর্তমান অবস্থা এক নজরে দেখুন
          </p>
        </div>

        <div className="manager-role">
          ম্যানেজার
        </div>
      </div>


      {/* Navigation */}
      <div className="manager-nav">

        <button className="manager-nav-active">
          ড্যাশবোর্ড
        </button>

        <button>
          সমস্যা
        </button>

        <button>
          নতুন
        </button>

      </div>


      {/* Summary Cards */}
      <div className="manager-summary">

        <div className="summary-box">
          <span>মোট যন্ত্রের ধরন</span>
          <strong>{equipments.length}</strong>
        </div>

        <div className="summary-box">
          <span>মোট স্টক</span>

          <strong>
            {equipments.reduce(
              (total, item) => total + item.stock,
              0
            )}
          </strong>
        </div>

        <div className="summary-box">
          <span>উপলভ্য যন্ত্র</span>
          <strong>{equipments.length}</strong>
        </div>

      </div>


      {/* Equipment Section */}
      <div className="manager-content">

        <div className="manager-content-heading">

          <div>
            <h2>যন্ত্রপাতির তালিকা</h2>

            <p>
              স্টক, প্রাপ্যতা, পরিচালন খরচ ও
              প্রয়োজনীয় জনবল
            </p>
          </div>

        </div>


        {/* Table */}
        <div className="equipment-table-wrapper">

          <table className="manager-equipment-table">

            <thead>
              <tr>
                <th>যন্ত্রপাতির নাম</th>
                <th>স্টক</th>
                <th>প্রাপ্যতা</th>
                <th>দৈনিক খরচ</th>
                <th>প্রয়োজনীয় কৃষক/শ্রমিক</th>
              </tr>
            </thead>

            <tbody>

              {equipments.map((equipment) => (

                <tr key={equipment.id}>

                  <td>
                    <div className="manager-equipment-name">

                      <div className="equipment-number">
                        {equipment.id}
                      </div>

                      <span>
                        {equipment.name}
                      </span>

                    </div>
                  </td>


                  <td>

                    <span className="stock-value">
                      {equipment.stock}
                    </span>

                  </td>


                  <td>

                    <span className="availability-badge">
                      <span className="availability-dot"></span>

                      {equipment.availability}
                    </span>

                  </td>


                  <td className="expense-cell">
                    {equipment.expense}
                  </td>


                  <td className="worker-cell">
                    {equipment.farmers}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Manager;