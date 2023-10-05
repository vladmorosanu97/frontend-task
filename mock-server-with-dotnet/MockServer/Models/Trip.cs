using Newtonsoft.Json;

namespace MockServer.Models
{
    public partial class Trip
    {
        public long Id { get; set; }

        public Uri PhotoUrl { get; set; }

        public string Title { get; set; }

        public string Subtitle { get; set; }

        public string[] Countries { get; set; }

        public long Days { get; set; }

        public double Co2Kilograms { get; set; }

        public double Rating { get; set; }

        public string Description { get; set; }

        public Advantage[] Advantages { get; set; }
    }
}
