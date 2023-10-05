using MockServer.Models;
using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();

app.UseCors(builder => builder
.AllowAnyOrigin()
.AllowAnyMethod()
.AllowAnyHeader()
);

string tripsJson = File.ReadAllText("trips.json");
List<Trip> trips = JsonConvert.DeserializeObject<List<Trip>>(tripsJson)!;

string tripJson = File.ReadAllText("single trip.json");
Trip trip = JsonConvert.DeserializeObject<Trip>(tripJson)!;

app.MapGet("/", () => "Hello World!");

app.MapGet("/api/trips", () =>
{
    return Results.Json(trips);
});

app.MapGet("/api/trips/{id}", (int id) =>
{
    //return Results.Json(trips.Where(x => x.Id == id));
    return Results.Json(trip);
});

app.Run();
