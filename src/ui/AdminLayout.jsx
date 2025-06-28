import { NavLink, Outlet } from "react-router-dom";
import AdminHome from "../components/admin/AdminHome";

import React, { useEffect, useState } from "react";
import { Users, Handshake, CalendarDays, Wallet } from "lucide-react";
import { Button, Card } from "react-bootstrap";

function AdminLayout() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          students: data.length,
          volunteers: Math.floor(Math.random() * 20 + 10),
          donations: Math.floor(Math.random() * 50000 + 20000),
          events: Math.floor(Math.random() * 10 + 2),
        });
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center p-10">Loading dashboard...</p>;

  return (
    <div className="p-6 bg-[#E6F2FA] min-h-screen">
      <h1 className="text-2xl font-bold text-[#033E6B] mb-6">
        Admin Dashboard
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-[#005B9A] text-white">
          <Card.Body className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-lg">Total Students</h2>
              <p className="text-2xl font-bold">{stats.students}</p>
            </div>
            <Users size={36} />
          </Card.Body>
        </Card>

        <Card className="bg-[#F7941D] text-white">
          <Card.Body className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-lg">Active Volunteers</h2>
              <p className="text-2xl font-bold">{stats.volunteers}</p>
            </div>
            <Handshake size={36} />
          </Card.Body>
        </Card>

        <Card className="bg-[#033E6B] text-white">
          <Card.Body className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-lg">Monthly Donations</h2>
              <p className="text-2xl font-bold">₹ {stats.donations}</p>
            </div>
            <Wallet size={36} />
          </Card.Body>
        </Card>

        <Card className="bg-[#005B9A] text-white">
          <Card.Body className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-lg">Upcoming Events</h2>
              <p className="text-2xl font-bold">{stats.events}</p>
            </div>
            <CalendarDays size={36} />
          </Card.Body>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Button className="bg-[#F7941D] hover:bg-orange-600 text-white">
          Add Student
        </Button>
        <Button className="bg-[#F7941D] hover:bg-orange-600 text-white">
          Add Volunteer
        </Button>
        <Button className="bg-[#F7941D] hover:bg-orange-600 text-white">
          Record Donation
        </Button>
      </div>

      {/* Alternating Section - Recent Registrations */}
      <div className="bg-[#FFF4E5] rounded-xl p-6">
        <h2 className="text-xl font-semibold text-[#033E6B] mb-4">
          Recent Student Registrations
        </h2>
        <ul className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <li
              key={i}
              className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
            >
              <span className="font-medium">Student #{i + 1}</span>
              <span className="text-sm text-gray-500">
                Joined: 2025-06-2{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminLayout;
