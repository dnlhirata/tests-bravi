FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY ["ContactList.API/ContactList.API.csproj", "ContactList.API/"]
RUN dotnet restore "ContactList.API/ContactList.API.csproj"
COPY . .
WORKDIR "/src/ContactList.API"
RUN dotnet build "ContactList.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ContactList.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ContactList.API.dll"]