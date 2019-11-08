using Microsoft.EntityFrameworkCore.Migrations;

namespace ContactList.Infra.Data.Migrations
{
    public partial class PhoneandEmailmodified : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsProfessional",
                table: "Phone");

            migrationBuilder.DropColumn(
                name: "PersonalEmail",
                table: "Email");

            migrationBuilder.DropColumn(
                name: "ProfessionalEmail",
                table: "Email");

            migrationBuilder.AlterColumn<string>(
                name: "Number",
                table: "Phone",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmailAddress",
                table: "Email",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmailAddress",
                table: "Email");

            migrationBuilder.AlterColumn<string>(
                name: "Number",
                table: "Phone",
                type: "text",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<bool>(
                name: "IsProfessional",
                table: "Phone",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "PersonalEmail",
                table: "Email",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ProfessionalEmail",
                table: "Email",
                type: "text",
                nullable: true);
        }
    }
}
