using Microsoft.EntityFrameworkCore.Migrations;

namespace ContactList.Infra.Data.Migrations
{
    public partial class Addedpersonobjecttophoneandemail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Person_Email_EmailId",
                table: "Person");

            migrationBuilder.DropForeignKey(
                name: "FK_Person_Phone_PhoneId",
                table: "Person");

            migrationBuilder.DropIndex(
                name: "IX_Person_EmailId",
                table: "Person");

            migrationBuilder.DropIndex(
                name: "IX_Person_PhoneId",
                table: "Person");

            migrationBuilder.DropColumn(
                name: "EmailId",
                table: "Person");

            migrationBuilder.DropColumn(
                name: "PhoneId",
                table: "Person");

            migrationBuilder.AddColumn<long>(
                name: "PersonId",
                table: "Phone",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "PersonId",
                table: "Email",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Phone_PersonId",
                table: "Phone",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_Email_PersonId",
                table: "Email",
                column: "PersonId");

            migrationBuilder.AddForeignKey(
                name: "FK_Email_Person_PersonId",
                table: "Email",
                column: "PersonId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Phone_Person_PersonId",
                table: "Phone",
                column: "PersonId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Email_Person_PersonId",
                table: "Email");

            migrationBuilder.DropForeignKey(
                name: "FK_Phone_Person_PersonId",
                table: "Phone");

            migrationBuilder.DropIndex(
                name: "IX_Phone_PersonId",
                table: "Phone");

            migrationBuilder.DropIndex(
                name: "IX_Email_PersonId",
                table: "Email");

            migrationBuilder.DropColumn(
                name: "PersonId",
                table: "Phone");

            migrationBuilder.DropColumn(
                name: "PersonId",
                table: "Email");

            migrationBuilder.AddColumn<long>(
                name: "EmailId",
                table: "Person",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "PhoneId",
                table: "Person",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Person_EmailId",
                table: "Person",
                column: "EmailId");

            migrationBuilder.CreateIndex(
                name: "IX_Person_PhoneId",
                table: "Person",
                column: "PhoneId");

            migrationBuilder.AddForeignKey(
                name: "FK_Person_Email_EmailId",
                table: "Person",
                column: "EmailId",
                principalTable: "Email",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Person_Phone_PhoneId",
                table: "Person",
                column: "PhoneId",
                principalTable: "Phone",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
