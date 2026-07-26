const dashboardModel = require("../models/dashboard.model");

async function getStatistics(req, res) {
  try {
    const statistics = await dashboardModel.getStatistics();

    res.status(200).json({
      success: true,
      message: "Dashboard statistics retrieved successfully.",
      data: statistics,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
async function getRecentActivity(req, res) {
  try {
    const recent = await dashboardModel.getRecentActivity();

    res.status(200).json({
      success: true,
      message: "Recent activity retrieved successfully.",
      data: recent
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
module.exports = {
  getStatistics,
  getRecentActivity
};