import React, { useState } from "react";

type MasterItem = {
  id: number;
  code: string;
  name: string;
};

type DetailItem = {
  id: number;
  name: string;
  active: boolean;
};

const masterDummy: MasterItem[] = [
  { id: 1, code: "PAR001", name: "Parameter Usia" },
  { id: 2, code: "PAR002", name: "Parameter BMI" },
  { id: 3, code: "PAR003", name: "Parameter Periode" },
];

const detailDummy: DetailItem[] = [
  { id: 1, name: "Value A", active: true },
  { id: 2, name: "Value B", active: false },
];

const ParameterMaintenance = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<MasterItem | null>(null);
  const [details, setDetails] = useState<DetailItem[]>(detailDummy);
  const [newValue, setNewValue] = useState("");

  /* ---------- FILTER MASTER ---------- */
  const filteredMaster = masterDummy.filter(
    (item) =>
      item.code.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  /* ---------- ACTIONS ---------- */
  const addDetail = () => {
    if (!newValue.trim()) return;

    setDetails([
      ...details,
      {
        id: Date.now(),
        name: newValue,
        active: true,
      },
    ]);
    setNewValue("");
  };

  const deleteDetail = (id: number) => {
    setDetails(details.filter((d) => d.id !== id));
  };

  const toggleActive = (id: number) => {
    setDetails(
      details.map((d) =>
        d.id === id ? { ...d, active: !d.active } : d
      )
    );
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h4 className="mb-4">Parameter Maintenance</h4>

          {/* ================= STEP 1 ================= */}
          {!selected && (
            <>
              <input
                className="form-control mb-3"
                placeholder="Search by code or name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <ul className="list-group">
                {filteredMaster.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item list-group-item-action"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelected(item)}
                  >
                    <strong>{item.code}</strong> — {item.name}
                  </li>
                ))}

                {filteredMaster.length === 0 && (
                  <li className="list-group-item text-muted">
                    Data not found
                  </li>
                )}
              </ul>
            </>
          )}

          {/* ================= STEP 2 ================= */}
          {selected && (
            <>
              <button
                className="btn btn-link mb-3 px-0"
                onClick={() => setSelected(null)}
              >
                ← Back to list
              </button>

              <h5 className="mb-3">
                Parameter:{" "}
                <span className="text-primary">{selected.code}</span>
              </h5>

              {/* ADD */}
              <div className="d-flex gap-2 mb-3">
                <input
                  className="form-control"
                  placeholder="Add new value"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                />
                <button className="btn btn-primary" onClick={addDetail}>
                  Add
                </button>
              </div>

              {/* TABLE */}
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Value</th>
                    <th>Status</th>
                    <th width="160">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((d) => (
                    <tr key={d.id}>
                      <td>{d.name}</td>
                      <td>
                        <span
                          className={`badge ${
                            d.active ? "bg-success" : "bg-secondary"
                          }`}
                        >
                          {d.active ? "Active" : "Non Active"}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => toggleActive(d.id)}
                        >
                          Toggle
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => deleteDetail(d.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  {details.length === 0 && (
                    <tr>
                      <td colSpan={3} className="text-center text-muted">
                        No data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParameterMaintenance;
